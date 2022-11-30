import { Route, Routes, Navigate } from 'react-router-dom';

import { Error404 } from '../pages/Error404';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Profile } from '../pages/Profile';
import { DashboardDeposit } from '../pages/DashboardDeposit';
import { DashboardExtract } from '../pages/DashboardExtract';
import { DashboardTransfer } from '../pages/DashboardTransfer';
import { DashboardWithdraw } from '../pages/DashBoardWithdraw';
import { TransactionDeposit } from '../pages/TransactionDeposit';
import { TransactionReceivedTransfer } from '../pages/TransactionReceivedTransfer';
import { TransactionTransferSent } from '../pages/TransactionTransferSent';
import { TransactionWithdraw } from '../pages/TransactionWithdraw';

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Error404 />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard/extract" element={<DashboardExtract />} />
      <Route path="/dashboard/transfer" element={<DashboardTransfer />} />
      <Route path="/dashboard/deposit" element={<DashboardDeposit />} />
      <Route path="/dashboard/withdraw" element={<DashboardWithdraw />} />

      <Route path="/profile/" element={<Profile />} />

      <Route path="/transaction/transfersent/:transactionId" element={<TransactionTransferSent />}/>
      <Route path="/transaction/withdraw/:transactionId" element={<TransactionWithdraw />} />
      <Route path="/transaction/deposit/:transactionId" element={<TransactionDeposit />} />
      <Route path="/transaction/receivedtransfer/:transactionId" element={<TransactionReceivedTransfer />} />
    </Routes>
  );
};
