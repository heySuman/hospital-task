export type User = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    role: 'User' | 'Doctor';
    gender: 'Male' | 'Female';
    address: string;
    appointmentTime: string | null;
    assignedDoctor: string | null;
}
