import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../firebase/config';

const propertiesCollection = collection(db, 'properties');

export const propertyService = {
  // Add a new property
  async addProperty(propertyData) {
    try {
      const docRef = await addDoc(propertiesCollection, {
        ...propertyData,
        createdAt: new Date(),
        verified: false
      });
      return docRef.id;
    } catch (error) {
      throw error;
    }
  },

  // Get all properties
  async getAllProperties() {
    try {
      const querySnapshot = await getDocs(propertiesCollection);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  },

  // Get a single property
  async getProperty(id) {
    try {
      const docRef = doc(db, 'properties', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      }
      return null;
    } catch (error) {
      throw error;
    }
  },

  // Update a property
  async updateProperty(id, propertyData) {
    try {
      const docRef = doc(db, 'properties', id);
      await updateDoc(docRef, propertyData);
    } catch (error) {
      throw error;
    }
  },

  // Delete a property
  async deleteProperty(id) {
    try {
      const docRef = doc(db, 'properties', id);
      await deleteDoc(docRef);
    } catch (error) {
      throw error;
    }
  },

  // Get featured properties
  async getFeaturedProperties(limit = 6) {
    try {
      const q = query(
        propertiesCollection,
        where('featured', '==', true),
        orderBy('createdAt', 'desc'),
        limit(limit)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  },

  // Search properties
  async searchProperties(criteria) {
    try {
      let q = propertiesCollection;
      
      if (criteria.priceRange) {
        const [min, max] = criteria.priceRange.split(' - ').map(price => 
          parseInt(price.replace(/[^0-9]/g, ''))
        );
        q = query(q, where('price', '>=', min));
        if (max) {
          q = query(q, where('price', '<=', max));
        }
      }

      if (criteria.bedrooms) {
        const minBeds = parseInt(criteria.bedrooms);
        q = query(q, where('bedrooms', '>=', minBeds));
      }

      if (criteria.propertyType && criteria.propertyType !== 'Any') {
        q = query(q, where('type', '==', criteria.propertyType));
      }

      if (criteria.verification && criteria.verification !== 'Any') {
        q = query(q, where('verified', '==', criteria.verification === 'Verified'));
      }

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw error;
    }
  }
}; 