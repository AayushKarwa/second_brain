
import { ShareIcon } from './Icons/ShareIcon'
import { PlusIcon } from './Icons/PlusIcon'
import { DeleteIcon } from './Icons/DeleteIcon'

interface cardInterface{
    title:string,
    link:string,
    type:'youtube'|'twitter'
}

const Card = ({title,link,type}:cardInterface) => {
  return (
    <div>
        <div className='p-5 w-max-96 rounded-lg text-black shadow-md border border-slate-100 justify-center bg-gradient-to-r from-purple-200 to-purple-100'
        >
            <div className='flex justify-between items-center max-w-72'
            >
                <div className='flex gap-2 text-lg font-sans font-semibold '>
                    <div>
                        <a href={link} target='_blank'> <ShareIcon/>
                        </a>
                        
                    </div>
                    {title}
                </div>

                <div className='flex gap-2'>
                    <div><PlusIcon/></div>
                    <div><DeleteIcon/></div>
                </div>

            </div>
           <div className='pt-4'>
           {type=='youtube' && <iframe className='w-full h-full'  src={
      link.includes('youtu.be/')
        ? link.replace('youtu.be/', 'www.youtube.com/embed/')
        : link.replace('watch?v=', 'embed/').split('&')[0]
    } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}


           {type==='twitter' && <><blockquote className="twitter-tweet">
  <a href={link.replace('x.com','twitter.com')}></a> 
</blockquote></>}
           </div>
        </div>
    </div>
  )
}

export default Card