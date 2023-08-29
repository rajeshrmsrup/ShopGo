import { useRouter } from 'next/router'
import React from 'react'

export default function ThankYou() {
    const router = useRouter();
    console.log('router', router.query)
    return (
        <div>
            <h1>ThankYou for shoping with us</h1>
        </div>
    )
}
