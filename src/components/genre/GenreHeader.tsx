"use client";

type GenreHeaderProps = {
    title: string;
};

export const GenreHeader = ({title}:GenreHeaderProps) => {
  return (
    <div className='text-foreground space-y-1'>
    <h3 className='text-2xl font-semibold'> Genre</h3>
    <p className='text-base'>See lists of Movies by genre</p>
</div>
  )
}
