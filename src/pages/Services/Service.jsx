import React from 'react'
import styles from './Service.module.css'

const Service = () => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold z-10">What we do</h2>
        </div>
      </div>
    </>
  )
}

export default Service