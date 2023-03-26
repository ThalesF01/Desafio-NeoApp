import react from 'react'
import Marvel from '../../images/capa-marvel.jpg'
import { Article, Container, Img, Title } from './mainStyles'

export default function Home(){
    return(        
       <Container>
            <Img><img src={Marvel} alt="err" /></Img> 
            <Article>
                <Title>Marvel</Title>     
                <p>Marvel is a comic book company that was founded in 1939 as Timely Publications. 
                    The company's most popular characters were created in the 1960s by writers and artists such as Stan Lee, 
                    Jack Kirby, and Steve Ditko, and include Spider-Man, the X-Men, the Fantastic Four, and the Avengers. 
                    Marvel has expanded into other forms of media, including movies, television shows, and video games, and 
                    was acquired by Disney in 2009. Marvel has remained a beloved and influential part of popular culture for 
                    over eight decades.One of the reasons for Marvel's success is its ability to create complex and relatable 
                    characters that resonate with audiences. The themes explored in Marvel's stories, such as the struggle between 
                    good and evil, the importance of teamwork, and the consequences of power, have also contributed to the company's 
                    enduring appeal. The Marvel Cinematic Universe, a series of interconnected movies based on Marvel's comic book 
                    characters, has become a cultural phenomenon, breaking box office records and garnering critical acclaim. </p>
            </Article>                                       
        </Container>        
    )
}