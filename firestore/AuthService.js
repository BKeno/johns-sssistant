import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};
