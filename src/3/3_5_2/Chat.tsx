import { Action } from './messengerReducer';
import { Contact } from './App';

export default function Chat(
    {
        contact, message, dispatch
    }:
    {
        contact: Contact,
        message: string,
        dispatch: (action: Action) => void
    }
) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
            dispatch({
                type: 'edited_message',
                message: e.target.value,
              });
        }}
      />
      <br />
      <button onClick={() => {
        // Показываем alert с электронной почтой получателя и сообщением
        alert(`Sending "${message}" to ${contact.email}`);
        // Очищаем вход сообщения
        dispatch({type: 'edited_message', message: ''});
      }}>Send to {contact.email}</button>
    </section>
  );
}
