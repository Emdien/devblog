import green_poly from '../../../images/green_poly.png'
import blue_poly from '../../../images/blue_poly.png'
import yellow_poly from '../../../images/yellow_poly.png'


export interface BlogData {
    slug: string,
    title: string,
    intro: string,
    date: string,
    img: string,
}

const BlogCardController = () => {
    
    const banners: {[key: string]: string} = {
        'green': green_poly,
        'blue': blue_poly,
        'yellow': yellow_poly
    }


    return {banners}
}

export default BlogCardController;