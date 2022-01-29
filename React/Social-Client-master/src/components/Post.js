import React, {useState} from 'react'
import styled from 'styled-components'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function Post({post, user}) {
    const [likes, setLikes] = useState(false)

//console.log(post.likes)


    function LikePost () {
       // console.log("Test")

        if (likes === false)
        {setLikes(true)}

        else if (likes === true)
        {setLikes(false)}
}

    return (
        <PostContainer>
            <PostInfos>
                {post.user.username}
            </PostInfos>
            <PostText>
                {post.text}
            </PostText>
            <Like onClick={LikePost}>
                {/*{likes ? <FaHeart/> : <FaRegHeart/>}*/}
                {post.likes.includes(user) ? <FaHeart/> : <FaRegHeart/>}
                {post.likes.length}
            </Like>
            <div>
                {post.likes.map(like => like)}
            </div>
        </PostContainer>
    )
}

export default Post

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;
    width: 70%;
`

const PostInfos = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
`

const PostText = styled.div`
    font-size: 0.8rem;
`

const Like = styled.div`
    color: red
`