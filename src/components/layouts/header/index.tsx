"use client";

import { MovieZLogo } from '@/components/common';
import { GenreDropdown } from '@/components/genre';

import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className="flex items-center">
        <MovieZLogo  className="text-indigo-700"/>
        <div className='relative hidden lg:flex items-center gap-x-3'>
          <GenreDropdown />
        </div>
      </div>
    </header>
  );
};