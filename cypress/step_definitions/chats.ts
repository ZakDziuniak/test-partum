import { Chats } from '../support/pageObjects/chatsPage';

const chats = new Chats();

export function ICheckThatIAmOnTheChatsPage() {
  chats.checkChatsUrl();
}
