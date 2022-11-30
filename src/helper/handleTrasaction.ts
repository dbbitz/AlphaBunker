import { api } from "../libs/api";

export interface TransacitionTypes {
    id?: number;
    type: 'transfer-send' | 'transfer-received' | 'deposit' | 'withdraw';
    value: number;
    receipt?: {agency: string , account: string} | null;
    sender?: {agency: string , account: string} | null;
}

export async function handleTransaction({type, value, receipt, sender}:TransacitionTypes) {
    try {
        const result = await api.post('/transactions', {
            type, value, receipt, sender
        })
        return result 
    } catch (error) {
        console.log(error);
        return error
        
    }
}
export async function getTransactions(setTransaction: any) {
    try {
        const { data } = await api.get<TransacitionTypes>('/transactions')
        
        setTransaction(data)
        
        return data
        
    } catch (error) {
        console.log(error);
        return error
        
    }
}

export async function  getTransactionForId(id:number) {
    try {
        const { data } = await api.get<TransacitionTypes[]>('/transactions', {
          params: {
            id: id,
          },
        });
        
        return data[0]

      } catch (error) {
        console.log(error);
      }
    }
