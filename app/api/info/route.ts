import { NextResponse } from "next/server";
import {
  DocumentData,
  Query,
  query,
  getDocs,
  collection,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import { Info } from "@/app/types/types.config";

const GET = async () => {
  try {
    // Retrieve the information from the 'information' collection.
    const item: Query<DocumentData, DocumentData> = await query(
      collection(db, "information")
    );

    // Retrieve the information from the 'info' doc.
    const snapshot: QuerySnapshot<DocumentData, DocumentData> = await getDocs(
      item
    );

    // Create a list that will store records of type, Info.
    const records: Info[] = [];

    // Store the data from the snapshot into the records list.
    snapshot.forEach((doc) => {
      const currentData = doc.data() as Info;
      records.push(currentData);
    });

    // Return the data.
    return NextResponse.json(records[0], {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error loading content." },
      { status: 500 }
    );
  }
};

export { GET };
