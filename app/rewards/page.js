'use client'

import React, { useState } from 'react'
import { FaGift } from 'react-icons/fa'

export default function RewardsPage() {
  const [selectedReward, setSelectedReward] = useState(null)
  const [redeemedRewards, setRedeemedRewards] = useState([])

  const rewards = [
    { id: 1, name: 'Eco-friendly Water Bottle', points: 500, image: '/images/water-bottle.jpg' },
    { id: 2, name: 'Reusable Shopping Bag', points: 300, image: '/images/shopping-bag.jpg' },
    { id: 3, name: '10% Discount Coupon', points: 1000, image: '/images/discount-coupon.jpg' },
    { id: 4, name: 'Plant a Tree', points: 750, image: '/images/plant-tree.jpg' },
  ]

  const handleRewardSelect = (reward) => {
    setSelectedReward(reward)
  }

  const handleRedeemReward = () => {
    if (selectedReward) {
      setRedeemedRewards([...redeemedRewards, selectedReward])
      setSelectedReward(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Your Rewards</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">Available Rewards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedReward?.id === reward.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => handleRewardSelect(reward)}
              >
                <div className="bg-gray-100 rounded-md mb-4 p-4 flex items-center justify-center">
                  <FaGift className="text-5xl text-green-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{reward.name}</h3>
                  <p className="text-green-600 font-bold">{reward.points} points</p>
                </div>
              </div>
            ))}
          </div>
          {selectedReward && (
            <div className="bg-green-100 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Selected Reward: {selectedReward.name}</h3>
              <p className="mb-4 text-gray-700">Points required: {selectedReward.points}</p>
              <button
                onClick={handleRedeemReward}
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md"
              >
                Redeem Reward
              </button>
            </div>
          )}
          {redeemedRewards.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Redeemed Rewards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {redeemedRewards.map((reward) => (
                  <div key={reward.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-100 rounded-md mb-4 p-4 flex items-center justify-center">
                      <FaGift className="text-5xl text-green-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{reward.name}</h3>
                      <p className="text-green-600 font-bold">Redeemed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}