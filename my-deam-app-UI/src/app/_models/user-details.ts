export class UserDetails {
    userDetailsId: number;
    userId: number;
    firstName; string;
    middleName: string;
    lastName: string;
    createProfileFor: string;
    birthDate: string; // DD/MM/YYYYY
    height: number;
    maritalStatus: string; // Never Married/Married/Awaiting Diovrce/Divrced/Widowed/Annulled
    cast: string;     // Shimpi
    subCast: string;  // Namdev/Bhavsar/Rangari/Ahir/Maheswari/Meru
    addrPermenentCity: string;
    addrcurrentCity: string;
    addrPermenentState: string;
    addrcurrentState: string;
    addrPermenentZip: string;
    addrCurrentZip: string;
    mobileNo: string;
    addrCurrentStreet: string;
    addrPermenentStreet: string;
    education: string;    // 10th, 12th, Graduation, PostGraduation
    isSalaried: boolean;  // true/false
    jobDetails: string;   // details about company or business
    income: number;       // 5000
    incomeType: string;   // Monthly or Annually
}
