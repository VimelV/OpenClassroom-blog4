export class Post {
// Classe representant un objet de type Post

    // Titre du post
    title: string;
    //Contenu du post
    content: string;
    //nombre de personnes aimant le post
    loveIts: number;
  
    public created_at: Date;

    //Constructeur permettant d'initialiser un objet de tpe Post
    constructor(title: string, content: string, loveIts: number) {
      this.title = title;
      this.content = content;
      this.loveIts = loveIts;
      this.created_at = new Date();
    }
  }