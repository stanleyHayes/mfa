import React from "react";
import Layout from "../../components/layout/layout";
import 'react-bnb-gallery/dist/style.css';
import {useParams} from "react-router";

const PhotoGalleryPage = () => {

    const {album} = useParams();

    console.log(album);

    return (
        <Layout>

        </Layout>
    )
}

export default PhotoGalleryPage;