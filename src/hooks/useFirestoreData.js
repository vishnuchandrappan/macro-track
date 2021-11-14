import { useFirestore, useFirestoreCollectionData } from "reactfire";

export const useFirestoreData = (collection) => {
  const collectionRef = useFirestore().collection(collection);
  const data = useFirestoreCollectionData(collectionRef);
  return data;
};
