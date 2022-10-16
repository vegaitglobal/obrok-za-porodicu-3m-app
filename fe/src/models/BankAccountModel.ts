export interface BankAccountModel {
    id?: number | null;
    receiverName: string;
    receiverCity: string;
    receiverAddress: string;
    accountNumber: string;
    transactionModel?: number | null;
    referenceNumber?: string | null;
    phoneNumber?: string | null;
}
