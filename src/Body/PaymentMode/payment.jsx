import React from 'react'

const payment = () => {
  return (
    <div class="container my-4 card">
        <h5 class="my-3 mx-3">Payment Mode</h5>
        <ul class=" fs-6">
            <li class="custom-list">✅ Deposit to Account</li>
            <li class="custom-list">✅ Credit Card/Debit Card</li>
            <li class="custom-list">✅ Wallets (PayTM/PhonePe/Amazon etc.)</li>
            <li class="custom-list">✅ Net Banking</li>
            <li class="custom-list">✅ UPI</li>
        </ul>
    </div>
  )
}

export default payment