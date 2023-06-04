import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";
import { scrollReveal } from "../animation";

const FaqSection =() =>{
    const [element, controls] = useScroll()
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <LayoutGroup>
            <Toggle title="How Do I Start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo!</p>
                </div>
            </Toggle>
            <Toggle title="Daily Schedule">

                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo!</p>
                </div>
            </Toggle>
            <Toggle title="Differents Payment methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo!</p>
                </div>
            </Toggle>
            <Toggle title="What products do you offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo!</p>
                </div>
            </Toggle>
            </LayoutGroup>
        </Faq>    
    )
  };


  const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;

    }
    .question{
        padding: 2rem 0;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0;
        p{
            padding: 1rem 0rem
        }
    }

  `
  
  export default FaqSection;
  