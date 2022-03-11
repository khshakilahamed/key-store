import React from 'react';
import KeyboardsList from '../../KeyboardCollections/KeyboardsList/KeyboardsList';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import SpecialItem from '../SpecialItem/SpecialItem';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <SpecialItem></SpecialItem>
            <KeyboardsList></KeyboardsList>
            <Footer></Footer>
        </div>
    );
};

export default Home;