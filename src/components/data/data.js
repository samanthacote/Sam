//shoes image imports
import flatSlippersImage from '../../images/blochFlat.png';
import blochPointeImage from '../../images/blochPointe.png';
import grishkoPointeImage from '../../images/grishkoPointe.png';
//leotards image imports
import meshBackImage from '../../images/meshBack.png';
import longSleeveImage from '../../images/longSleeve.png';
import velvetRedImage from '../../images/velvetRed.png';
//costumes image imports
import whiteTulleImage from '../../images/whiteTulle.png';
import redTutuImage from '../../images/redTutu.png';
import lilacTutuImage from '../../images/lilacTutu.png';


//shoes *mock database* --------------------------------------
const flatSlippers = {im: flatSlippersImage, title: "Bloch Womens Performa Stretch Canvas Ballet Shoes", price: "$16.92"}
const blochPointe = {im: blochPointeImage, title: "Bloch Adult Balance European Pointe Shoes", price: "$80.05"}
const grishkoPointe = {im: grishkoPointeImage, title: "Grishko Adult Triumph Pointe Shoes", price: "$79.46"}

export const shoes = [flatSlippers, blochPointe, grishkoPointe];


//leotards *mock database* -----------------------------------
const meshBack = {im: meshBackImage, title: "Womens Compression Mesh Back Leotard", price: "$37.05"}
const longSleeve = {im: longSleeveImage, title: "Womens Inspired Back Cutout Long Sleeve Leotard", price: "$41.18"}
const velvetRed = {im: velvetRedImage, title: "Womens Burnout Velvet Camisole Leotard", price: "$58.53"}

export const leotards = [meshBack, longSleeve, velvetRed];


//costumes *mock database* ------------------------------------
const whiteTulle = {im: whiteTulleImage, title: "Adult 24-inch Juliet Skirt Soft Tulle", price: "$25.42"}
const redTutu = {im: redTutuImage, title: "Womens 7-Layer Ballet Tutu Skirt", price: "$77.22"}
const lilacTutu = {im: lilacTutuImage, title: "Adult Professional 6-Layer Platter Tutu" , price: "$124.86"}

export const costumes = [whiteTulle, redTutu, lilacTutu];





