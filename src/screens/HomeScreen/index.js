import {Text, View, Image, ScrollView} from "react-native";
import styles from "./homescreen.style";
import { Dimensions } from "react-native";
import CircleMenu from "./CircleMenu";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const Home = () => {

    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').width;

    const navigation = useNavigation();

    const onNewsPressed = () => {
        navigation.navigate("News");
    };

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>СТУДЕНТ</Text>
                </View>
                <View style={styles.profile}>
                    <View style={styles.profileUpper}> 
                        <Image style={styles.avatar} source={require("./../../../assets/ava.png")}/>
                        <View>
                            <Text style={styles.name}>Батыр</Text>
                            <Text style={styles.name}>Султан</Text>
                        </View>
                    </View>
                    <View style={styles.profileDetails}>
                        <View style={styles.profileInner}>
                            <Text style={{marginBottom: 5}}>Курс: 2</Text>
                            <Text style={{marginBottom: 5}}>Специальность: Data Science</Text>
                            <Text>Факультет: ИС</Text>
                        </View>
                        <Image style={styles.dimension}source={require('./../../../assets/arrow-right.svg')}/>
                    </View>
                </View>
                <View style={styles.lines}>
                    <View style={styles.active}></View>
                    <View style={styles.dot}></View>
                </View>
                
                <CircleMenu />
        
                <View style={[styles.menu, {width: width, marginTop: height * 0.1}]}>
                    <View style={[styles.upper, {width: width}]}>
                        <Image style={styles.menuLargeDimension} source={require('./../../../assets/unix.png')} />
                        
                            <Image style={styles.menuDimension} source={require('./../../../assets/map.png')}/>
                        
                    </View>
                    <View style={[styles.lower, {width: width}]}>
                        <TouchableOpacity onPress={onNewsPressed}>
                            <Image style={styles.menuDimension} source={require('./../../../assets/News.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.menuDimension} source={require('./../../../assets/Discount.png')}/>
                        <Image style={styles.menuDimension} source={require('./../../../assets/events.png')}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;
