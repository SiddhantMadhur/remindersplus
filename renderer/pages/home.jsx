import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {

  const [tasks, setTasks] = useState([])
  const [pen, setPen] = useState('')

  useEffect(() => { console.log(tasks) }, [tasks])

  return (
    <React.Fragment>
      <Head>
        <title>Reminders+</title>
      </Head>
      <main className='flex flex-col gap-y-5'>
        <div className='text-center text-3xl my-5'>
          Reminders+
        </div>
        <div className='flex justify-center'>
          <input className='text-black px-2 py-1 rounded-lg' type="text" placeholder='Reminder' onChange={e => setPen(e.target.value)} />

        </div>
        <div className='flex justify-center'>
          <button
            className='bg-gray-700 px-5 py-2'
            onClick={() => {
              const temp = [pen]
              setTasks(tasks.concat(temp))
            }}>
            submit
          </button>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col gap-y-3'>
            {
              tasks.map((e, index) => (
                <div className='flex gap-x-5'>
                  <div>
                    <button onClick={() => {
                      let temp = []
                      for (let i = 0; i < tasks.length; i++) {
                        if (i !== index) {
                          temp.push(tasks[i])
                        }
                      }
                      setTasks(temp)
                    }}>
                      ❌
                    </button>
                  </div>
                  <div>
                    {e}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
