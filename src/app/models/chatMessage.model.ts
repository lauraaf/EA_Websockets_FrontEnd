export interface ChatMessage {
  //modifiquem el model del missatge per poder inserir la data
    message: string;
    type: 'sent' | 'received'; // Solo estos dos tipos
    date: Date;
  }