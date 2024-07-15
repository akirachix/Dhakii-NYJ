import './Blogs.css';
import rect from '../Images/rect.png';
import caseStudy from '../Images/caseStudy.png';
import trevorNoah from '../Images/trevorNoah.jpg';




const BlogPage=()=>{
 

    return(
        <div className='Body' >
      
            <div className='BlogsBody'>
                <div className='text'>
                <h2>Discover Transformative Insights in our Blog Library</h2>
                </div>
                <div id='det'>
                <div className='Details'>
                    <div className='BornACrime'>
                        <img src={rect} alt='Body' id='Topics'/>
                        <div className='content'>
                            <img src={trevorNoah} alt='Born A Crime' id='studies'/>
                            <p>Be inspired by the <br/>
                            extraordinary life journey <br/>
                            chronicled in Born a Crime <br/>
                            </p>
                            <a href='https://docs.google.com/document/d/1_pjeMJedYZE3YQqhfeRZYXALRshZkM0Q9ZnyLF5bVIE/edit?usp=sharing'><button className='button'>Read</button></a>
                        </div>
                    </div>
                    
                    <div className='BornACrime'>
                        <img src={rect} alt='Body' id='Topics'/>
                        <div className='content'>
                            <img src={caseStudy} alt='Casestudy' id='studies'/>
                            <p>Discover the strategies <br/>
                               powering Rwanda's Dairy <br/>
                                transformation in this <br/>
                                comprehensive case study.<br/>
                                </p>
                            <a href='https://docs.google.com/document/d/199X7-9sKUUSAj0CozWxKJBb5OdhLZuNvtnUXM2-v0S0/edit?usp=sharing'><button className='button'>Read</button></a>
                        </div>
                    </div>


                </div>
                </div>
                </div>

        </div>
    )
}
export default BlogPage;