import styled from "styled-components"
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { MovieState } from '../MovieState'
import { motion } from "framer-motion";
import {pageAnimation} from '../animation'
import ScrollTop from "../components/ScrollTop";

const MovieDetail = () => {
    const url = useLocation();
    const [movies] = useState(MovieState);
    const [movie, setMovie] = useState(null)

    //useEffect
    useEffect(()=>{
        const currentMovie = movies.filter(
            (stateMovie) => stateMovie.url === url.pathname
        );
        setMovie(currentMovie[0]);
    }, [movies, url])

    return(
        <>
        {movie && (
        <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="sarasa"/>

            </HeadLine>
            <Awards>
                {movie.awards.map((award)=>(
                    <Award title={award.title} description={award.description} key={award.title} />
                ))}
            </Awards>
            <ImgDisplay>
                <img src={movie.secondaryImg} alt="sarasa" />
            </ImgDisplay>
            <ScrollTop />
        </Details>
            )}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;


`

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%)
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

`
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px) {
        display:block;
        margin:2rem 2rem;
  }


`

const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 70%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem
    }

`

const ImgDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

`

//award component
const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail