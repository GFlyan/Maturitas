import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";

export default function Index() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  function handlePopUp() {
    if(openPopUp) setOpenPopUp(false);
    else setOpenPopUp(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Olá, Agricultor!</Text>
        <Text style={styles.paragraph}>Escaneie seus tomates e descubra se estão adequeados para colheita!</Text>
      </View>
      <View style={styles.camera_container}>
          <View style={styles.camera_logo}>
            <Image source={require('@/assets/icon-camera.svg')} height={50} width={50}/>
          </View>
          <Text style={styles.camera_title}>Escanear Tomate</Text>
          <Text style={styles.camera_paragraph}>Abra a câmera para analisar a maturação dos seus tomates.</Text>
          <Pressable style={styles.open_camera}>
              <Text style={styles.open_camera_text}>Abrir Câmera</Text>
          </Pressable>
      </View>

      <View style={styles.popup_container}>
        {!!openPopUp && 
          <View style={styles.pop_up}>
              {/* Cards */}

          </View>
        }
        <Pressable style={styles.open_info} onPress={handlePopUp}>
          {!!openPopUp ? 
            <Image source={require("@/assets/icon-close.svg")} height={50} width={50}/>:
            <View  style={{borderRadius: 999, backgroundColor: "white", height: 27.5, width: 27.5, justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: "#B23717", fontSize:20, fontWeight: "500"}}>i</Text>
            </View>
          }
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F3F4",
    paddingTop: 50
  },
  hero: {
    gap: 10,
    marginHorizontal: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "500"
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "500"
  },
  camera_container:{
    backgroundColor: "#B23717",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 30,
    gap: 10,
    marginTop: 50
  },
  camera_logo: {
    backgroundColor: "#F6F3F4",
    borderRadius: 999,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  camera_title: {
    color: "#F6F3F4",
    fontSize: 20,
    fontWeight: "500"

  },
  camera_paragraph: {
    color: "#F6F3F4",
    fontSize: 14,
    fontWeight: "500",
    width: 200,
    textAlign: "center"
  },
  open_camera: {
    backgroundColor: "#F6F3F4",
    borderRadius: 7.5, 
    paddingHorizontal: 40,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  open_camera_text: {
    color: "#B23717",
    fontSize: 20,
    fontWeight: "500"
  },
  popup_container: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  pop_up: {
    backgroundColor: "#B23717",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    height: 160,
    marginBottom: 10
  },
  open_info: {
    backgroundColor: "#B23717",
    width: 75,
    height: 75,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center"
  }
});
