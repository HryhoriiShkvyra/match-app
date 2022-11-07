import React from "react";


const App = () => {
    return(
        <div>
            {list.map(post => 
                <div key={post.id} className='userContent'>
                    <div className='userPhoto'>
                    <div className='userPhotoPlaceHolder'>may be photo 3/4</div>
                    </div>
                    <div className='userInfo'>
                    <div className='userInfoInline'>
                        <div className='userId'># {post.id}</div>
                        <div className='userName'>{post.name}</div>
                        <div className='userAge'>{post.age}</div>
                    </div>
                    
                    <div className='userCity'>{post.city}</div>
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
                    

                    
                </div>
            )}
        </div>
    )
}