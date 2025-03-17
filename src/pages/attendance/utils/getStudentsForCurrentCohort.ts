import axios from "axios";

export interface Student {
    firstName: string;
    lastName: string;
    _id: string;
}

export const getStudentsForCurrentCohort = async (): Promise<Student[]> => {
    const url = "http://127.0.0.1:3001/api/v1/student/getAllStudents";
    try {
        const response = await axios.get(url);
        return response.data.allStudents; // Ensure the API actually returns `allStudents` here.
    } catch (error) {
        console.error("Error fetching students:", error);
        return []; // Return an empty array in case of an error.
    }
};
