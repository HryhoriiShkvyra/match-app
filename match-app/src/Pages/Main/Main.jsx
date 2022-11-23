import React, {useState} from "react";
import classes from './Main.module.css'
import IMG1 from '../../assets/img4.jpg'



export const Main = ({userData}) => {

    const [moreInfoActive, setMoreInfoActive] = useState(false)
    const showMoreInfo = () => {
        setMoreInfoActive(moreInfoActive => !moreInfoActive)
        if(moreInfoActive === true) {
            console.log('more info work')
        }
        else {
            console.log('more info still work')
        }
    }

    return(
        <div className="containerIn">
            <div className={moreInfoActive ? classes.main : classes.mainActive}>
                <div className={moreInfoActive ? classes.active : classes.content}>
                    <div className={classes.photoBlock} >
                        <img src={IMG1} className={classes.photo}/>
                    </div>
                    <div className={classes.onPhoto}>

                        {moreInfoActive ?
                            null
                            :
                            <div className={classes.info}>
                                <div className={classes.nameAndAge}>
                                    Olena 99
                                    <span className={classes.verification}>
                                        <i style={{background: 'none', borderRadius: '1rem'}} class="fa-solid fa-check"></i>
                                    </span>
                                </div>
                                <div className={classes.onlineStatus}>
                                    <div className={classes.circle}></div>
                                    Online Now</div>
                                <div className={classes.distance}>
                                    <i style={{background: 'none'}} class="fa-solid fa-location-dot"></i>
                                    31 milFs away
                                </div>
                            </div>
                        }
                       
                        <div className={classes.btnBlock}>
                            {moreInfoActive ? 
                                <button onClick={showMoreInfo} >
                                    <i style={{
                                        width : '3.5rem',
                                        height: '3.5rem',
                                        background: 'red',
                                        borderRadius: '2rem',
                                        paddingTop: '1rem',
                                        margin: '10rem -3rem 0 ',
                                        fontSize: '1.5rem',
                                        color: '#fff'
                                    }} class="fa-solid fa-arrow-down"></i>
                                </button>
                                :
                                <button onClick={showMoreInfo} className={classes.moreInfo}>
                                    <i className={classes.btnDown} style={{background: 'none'}} class="fa-solid fa-arrow-up"></i>
                                </button>
                            }
                        </div>

                        <div className={moreInfoActive ? classes.btnBarDeActive : classes.btnBarActive}>
                            <div className={classes.btnItem}> 
                                <button className={classes.btnOne}>
                                    <i style={{background: 'none', color: 'white'}} class="fa-solid fa-rotate-left"></i>
                                </button>
                            </div>
                            <div className={classes.btnItemAlpha}> 
                                <button className={classes.btnTwo}>
                                    <i style={{background: 'none', color: 'rgb(228, 45, 45)'}} class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div className={classes.btnItem}> 
                                <button className={classes.btnThree}>
                                    <i style={{background: 'none', color: 'rgb(46, 217, 255)'}} class="fa-solid fa-star"></i>
                                </button>
                            </div>
                            <div className={classes.btnItemAlpha}> 
                                <button className={classes.btnFour}>
                                        <i style={{background: 'none', color: 'rgb(120, 232, 130)'}} class="fa-solid fa-heart"></i>
                                </button>
                            </div>
                            <div className={classes.btnItem}> 
                                <button className={classes.btnFive}>
                                    <i style={{background: 'none', color: 'rgb(165, 83, 180)'}} class="fa-solid fa-bolt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                { moreInfoActive
                    ?
                        <div>
                            <div className={classes.openedInfo}>
                            <div className={classes.openedInfoAbout}>
                                <div className={classes.openedInfoName}>Name 99</div>
                                <div className={classes.openedInfoAboutUser}>
                                    <div className={classes.openedInfoAboutUserCount}>
                                        <i class="fa-solid fa-suitcase"></i>
                                        wort at count
                                    </div>
                                    <div className={classes.openedInfoAboutUserCount}>
                                        <i class="fa-solid fa-graduation-cap"></i>
                                        education degree count
                                    </div>
                                    <div className={classes.openedInfoAboutUserCount}>
                                        <i class="fa-solid fa-house"></i>
                                        Lives in count
                                    </div>
                                    <div className={classes.openedInfoAboutUserCount}>
                                        <i class="fa-solid fa-house"></i>
                                        sexual type count
                                    </div>
                                    <div className={classes.openedInfoAboutUserCount}>
                                        <i class="fa-solid fa-location-dot"></i>
                                        count miles/km away
                                    </div>
                                </div>
                                <div className={classes.openedInfoUserAbout}>
                                    <div className={classes.openedInfoUserName}>
                                        About Me
                                    </div>
                                    <div  className={classes.openedInfoUserDescriptionBlock}>
                                        <div className={classes.openedInfoUserDescription}>
                                            user about himself
                                        </div>
                                        <div className={classes.openedInfoUserZodiacSign}>
                                            icon
                                            zodiac sign
                                            
                                        </div>
                                        
                                        
                                        
                                    </div>
                                    <div className={classes.openedInfoUserInterests}>
                                        <div className={classes.openedInfoUserInterest}>
                                            {/* icon
                                            count */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.moreAction}>
                            <div className={classes.shareField}>
                                <div className={classes.shareBtn}>
                                    <button className={classes.share}>
                                        Share profile to your friends
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
                


                
            </div>

            {/* {list.map(post =>  */}
                {/* <div className='userContent'>
                    <div className='userPhoto'>
                    <div className='userPhotoPlaceHolder'>may be photo 3/4</div>
                    </div>
                    <div className='userInfo'>
                    <div className='userInfoInline'>
                        <div className='userId'># 1</div>
                        <div className='userName'>Hryhorii</div>
                        <div className='userAge'>23</div>
                    </div>
                    
                    <div className='userCity'>Kyiv</div>
                    <div className='userAbout'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto, omnis quasi repudiandae aliquam a molestias sapiente. Alias porro incidunt repudiandae, doloribus omnis enim corporis aliquam id laborum dolore asperiores error eaque similique accusantium ducimus, quis rerum deleniti quibusdam voluptatibus dignissimos quas voluptatem modi delectus veniam. Voluptatibus doloremque sunt repudiandae fugiat qui neque earum, exercitationem possimus, illo molestiae nihil eligendi voluptatem tenetur adipisci reiciendis optio! Eveniet ullam labore autem illum iusto maxime explicabo, doloremque neque delectus ea debitis. Itaque, autem. Magnam doloribus eum perferendis molestiae rerum numquam corrupti reprehenderit laboriosam culpa, labore, soluta obcaecati cumque error, eius necessitatibus expedita ut?
                    </div>
                    <div className='userInterests'>
                        <div className='userInterest'>interests</div>
                        <div className='userInterest'>interests</div>
                        <div className='userInterest'>interests</div>
                        <div className='userInterest'>interests</div>
                        <div className='userInterest'>interests</div>
                
                    </div>
                    </div>
                    

                    
                </div> */}
            {/* )} */}
        </div>
    )
}