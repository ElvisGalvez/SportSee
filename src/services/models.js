// Contient les définitions des classes modèles qui structurent et formalisent les données récupérées.
export class UserData {
    constructor({ id, userInfos, todayScore, keyData }) {
      this.id = id;
      this.firstName = userInfos.firstName;
      this.lastName = userInfos.lastName;
      this.age = userInfos.age;
      this.todayScore = todayScore;
      this.keyData = keyData;
    }
  }
  
  // Modèle pour l'activité de l'utilisateur
  export class UserActivity {
    constructor({ userId, sessions }) {
      this.userId = userId;
      this.sessions = sessions;
    }
  }
  
  // Modèle pour les sessions moyennes de l'utilisateur
  export class AverageSessions {
    constructor({ userId, sessions }) {
      this.userId = userId;
      this.sessions = sessions;
    }
  }
  
  // Modèle pour la performance de l'utilisateur
  export class UserPerformance {
    constructor({ userId, data, kind }) {
      this.userId = userId;
      this.data = data;
      this.kind = kind;
    }
  }
  