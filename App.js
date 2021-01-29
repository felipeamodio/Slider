import React, {useState} from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'Fábrica de aplicativos',
    text: 'Aprenda a desenvolver aplicativos do extremo zero, usando as tecnologias mais modernas do mercado.',
    image: require('./src/assets/1.png')
  },

  {
    key: '2',
    title: 'Aulas 100% práticas',
    text: 'Você vai aprender a desenvolver aplicativos e sistemas completos usando React Native e React JS.',
    image: require('./src/assets/2.png')
  },

  {
    key: '3',
    title: 'Curso focado no mercado',
    text: 'Um treinamento totalmente na prática, direto ao ponto com as tecnologias que usamos atualmente no mercado.',
    image: require('./src/assets/3.png')
  },
]

export default function App() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({item}){
    return(
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{resizeMode: 'cover', height: '73%', width: '100%'}}
        />
        <Text style={{
          paddingTop: 25,
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: 'bold',
          color: '#009CFF',
          alignSelf: 'center'
        }}>
          {item.title}
        </Text>
        
        <Text style={{
          textAlign: 'center',
          color: '#B5B5B5',
          paddingHorizontal: 25,
          fontSize: 15
        }}>
          {item.text}
        </Text>
      </View>
    )
  }



  if(showHome){ //se eu tivesse uma home eu poderia renderizar p/ ir para lá
    return<Text>ENTROU NA HOME, PARABÉNS</Text>
  }else{
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30
        }}
        renderNextButton={() => {}}
        renderDoneButton={() => <Text style={{fontSize: 20, marginTop: 10}}>ACESSAR</Text>}
        onDone={() => alert('Entrou no app')}
      />
    );
  }
  
}

