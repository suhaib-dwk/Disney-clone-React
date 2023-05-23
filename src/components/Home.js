import React from 'react'
import ImgSlider from './ImgSlider'
import styled from 'styled-components'
import HomeImage from "../images/home-background.png"
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDesiny from './NewDesiny'
import Original from './Original'
import Trending from './Trending'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movies/MovieSlice'
import { selectUserName } from '../features/user/userSlice'

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection('movie').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }]
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                    default:
                        return 'default';
                }

            });
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                Original: originals,
                Trending: trending,

            }));
        });

    }, [userName])
    return (
        <Container urlImage={HomeImage}>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDesiny />
            <Original />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url(${props => props.urlImage}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset:0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home