"use client";

import { DropdownMenu,DropdownMenuContent, Separator } from '../ui';
import { AllMoviesGenres } from './AllMoviesGenres';
import { GenreDropdownTriggerButton } from './GenreDropdownTriggerButton';
import { GenreHeader } from './GenreHeader';

type GenreDropdownProps = {
    showLabel?: boolean;
};

export const GenreDropdown = ({showLabel=true}:GenreDropdownProps) => {
  return (
    <DropdownMenu>
        <GenreDropdownTriggerButton showLabel={showLabel}/>
        <DropdownMenuContent> 
            <GenreHeader title='Genre' />
            <Separator className="border"/>
            <AllMoviesGenres />
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
