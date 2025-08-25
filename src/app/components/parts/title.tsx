'use client';
import {B} from '../utils';

export function PartTitle() {
  return (
    <>
      <h1 className='text-5xl md:text-6xl font-extrabold text-sky-700 dark:text-blue-200'>
        你好！
      </h1>
      <h2 className='text-3xl md:text-4xl font-bold mt-4 text-sky-800 dark:text-blue-300'>
        这里是
        <span itemProp='name' className='px-2 text-sky-900 dark:text-blue-400'>
          小方盒LSCube
        </span>
      </h2>
    </>
  );
}

import React, { useEffect, useState } from 'react';

export function PartHitokoto() {
  const [hitokoto, setHitokoto] = useState('加载中...');
  const [uuid, setUuid] = useState('');

  useEffect(() => {
    async function fetchHitokoto() {
      try {
        const response = await fetch('https://v1.hitokoto.cn');
        const { uuid, hitokoto: hitokotoText } = await response.json();
        setHitokoto(hitokotoText);
        setUuid(uuid);
      } catch (e) {
        setHitokoto('获取失败');
      }
    }
    fetchHitokoto();
  }, []);

  return (
    <h3 className='mt-6 text-xl text-sky-900 dark:text-sky-200 leading-relaxed'>
      「
      {uuid ? (
        <a
          id='hitokoto_text'
          href={`https://hitokoto.cn/?uuid=${uuid}`}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-500'
        >
          <B>{hitokoto}</B>
        </a>
      ) : (
        <B>{hitokoto}</B>
      )}
      」
    </h3>
  );
}
