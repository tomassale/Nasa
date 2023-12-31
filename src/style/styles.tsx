import { StyleSheet } from "react-native";

export const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)'
  }
})

export const styleHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  image: {
    width: 60,
    height: 60,
  }
})

export const styleNotice = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold'
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end'
  }
})

export const styleLastImages = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  }
})

export const styleItemLastImage = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
})

export const styleDetail = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(18,39,113,255)',
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#FFF',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  date: {
    color: '#FFF',
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#FFF',
    fontSize: 16
  }
})