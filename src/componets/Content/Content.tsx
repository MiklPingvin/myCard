import React from 'react';
import styled from 'styled-components';

const ContentContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

const PStyled = styled.p`
  &::selection {
    background-color: green;
    color: #fbfbfb;
  }
`;

export const Content = () => {
  return (
    <ContentContentStyled>
      <p>Привет, друг!</p>
      <p>
        Меня зовут Михаил и уже 1.5 года работаю фронтенд разработчиком в очень
        крупной банковской компании. Понимаю, что слово фронтенд для тебя
        незнакомо. Если вкраци я занимаюсь разработкой сайтов.
      </p>
      <p>
        Для меня программирование - это хобби, переросшее в любимое дело.
        Наверно каждый из нас, когда в детстве видел неизвестный прибор, хотел
        понять как он устроен и работает. Сколько раз в детстве меня ругали за
        разобранную новую машинку или кораблик. Именно это меня научило важному
        правилу: если ты хочешь что-то разобрать, то должен уметь и собрать.
        Потом я вырос и начал разбирать компьютеры. Потом ещё вырос и начал
        разбирать сайты.
      </p>
      <p>
        Именно так я стал программистом. Именно в программировании меня
        привлекло 2 момента: всегда что-то новое и челлендж. Я не люблю сидеть
        на одном месте и за рутинной работой. В программировании с каждой новой
        задачей у тебя открывается что-то новое. И ты постоянно учишься, чтобы
        сделать ту или иную задачу. Постоянно преодолеваешь себя.
      </p>
      <p>
        Вот что для меня программирование. Каждый путь программиста по своему
        уникален. Удачи тебе на твоём!
      </p>
      <p>
        Давай теперь посмотрим пару фишек CSS, которые уж наверняка помогут тебе
        в обучении
      </p>
      <p>
        Ну во-первых этот текст выделяется красным. И я могу выбрать любой цвет.
      </p>
      <PStyled>Этот, например, зеленый)</PStyled>
      <p>
        Во-вторых сейчас вы видите фотографию 6-летней давности. Чтобы я немного
        постарел надо на эту фотографию навестись.
      </p>
      <p>И это вообще не все. Но остальное я раскрывать не буду.)</p>
    </ContentContentStyled>
  );
};
