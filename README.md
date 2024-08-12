# Уроки как создать чистую ООП архитектуру для детской игры. / Lessons on how to create a pure OOP architecture for a children's game.

Детская интерактивная пазл игра с животными на ts (TypeScript), написанная с целью обучения, где мы попытаемся разбить [портянку старого кода](https://github.com/yesworld/tutorial-dnd-animals/commit/e74b428898f3da415e3d49b2497f80c56ee217b1#diff-4fab5baaca5c14d2de62d8d2fceef376ddddcc8e9509d86cfa5643f51b89ce3d) и создать свою **Чистую архитектуру** проекта, придерживаясь ООП стиля программирования с использованием паттернов. 

We are developing an interactive game of puzzles for children with animals using Typescript. We will do a [refactor of the old code](https://github.com/yesworld/tutorial-dnd-animals/commit/e74b428898f3da415e3d49b2497f80c56ee217b1#diff-4fab5baaca5c14d2de62d8d2fceef376ddddcc8e9509d86cfa5643f51b89ce3d) and try to write with pure architecture. Where we will use the design of the pattern.

Сложность урока/difficulty of the lesson: :full_moon: :full_moon: :full_moon: :full_moon: :last_quarter_moon: (Очень сложно/Very hard)

![original-animal-day.svg](public/animal-day-preview.jpg)
<div dir="rtl">Image by <a href="https://www.freepik.com/free-vector/world-animal-day-flat-design-background_31240982.htm#&position=0&from_view=search&track=ais">Freepik</a></div>

## Список уроков на ютубе
- Урок 0: Подготовка проекта. Установка Vite, Prettier и Konva.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=HO6wBG8FFqo)
  :tv: [RuTube](https://rutube.ru/video/dfcc494c3f7fd547808db69e8229db9a/?playlist=331671&playlistPage=1)
  
- Урок 1: SVG нарезка и содание отдельных файлов c животными. Подготовка файла источника **sources** с набором координат.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=k87xvt_7WcM)
  :tv: [RuTube](https://rutube.ru/video/10ec69ec681d7bdc38902487f47fa885/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial-01](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial1-add-svg-animals-to-project)

- Урок 2: Создание ImageLoaderService по загрузке изображений. Добавление типов для TS.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=rzPTPMg2E30&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=3)
  :tv: [RuTube](https://rutube.ru/video/a8f4936c0a0c097282321e61e2f06d9c/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial2-create-image-loader-service](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial2-create-image-loder-service)

- Урок 3: Применяем пораждающий паттерн Билдер (Builder). Приводим проект к ООП стилю.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=kjj_4czV--c&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=4)
  :tv: [RuTube](https://rutube.ru/video/2da314cc06d30f9eb3621e4ecafc3430/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial3-create-game-builder](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial3-create-game-builder)

- Урок 4: Применяем пораждающий паттерн Фабрика (Simple Factory). Делаем небольшой рефакторинг.<br>
  :tv: [YouTube](https://youtu.be/Npjy5hL6ppA&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=5)
  :tv: [RuTube](https://rutube.ru/video/b08498671d6e57fe0f412f119b14fef2/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial4-create-konva-factory](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial4-create-konva-factory)

- Урок 5: Применяем анти паттерн Одиночка (Singleton).<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=T1l9GX3thv8&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=6)
  :tv: [RuTube](https://rutube.ru/video/c48564ff3faf0729edb00e9646d2acb4/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial5-create-pattern-singleton](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial5-create-pattern-singleton)

- Урок 6: Плюсы/минусы Синглитона в TypeScript. Создаем сервис для работе с размерами игры в ООП стиле.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=hEdUgYRE2KM&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=7)
  :tv: [RuTube](https://rutube.ru/video/4d22449ae62314af7a1c3b3b94b81f70/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial06-create-canvas-size-service](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial06-create-canvas-size-service)

- Урок 7: Применим SRP - принцип единой ответственности в TypeScript (SOLID).<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=OHxE1NKnPJc&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=8)
  :tv: [RuTube](https://rutube.ru/video/3817dc1de449f63952b66565ffbf4fce/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial07-srp-animal-manager](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial07-srp-animal-manager)

- Урок 8: Живой пример поведенческого паттерна Наблюдатель (Observer) на TypeScript / JavaScript.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=51Og538pXcw&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=9)
  :tv: [RuTube](https://rutube.ru/video/2aa7c1af5159d4da0dfb80d615ec1f8d/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial08-animal-observer](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial08-animal-observer)

- Урок 9: Создаем интерфейс для работы с игрой и добавим canvas confetti в callback завершения игры.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=cl5BluRPn9U&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=10)
  :tv: [RuTube](https://rutube.ru/video/b22a72e6304bc2b5ad7d22b50a836071/?playlist=331671&playlistPage=1)
  :octocat: [git-branch: tutorial09-create-api-game-add-confetti-to-game](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial09-create-api-game-add-confetti-to-game)

- Урок 10 CI/CD: Build и Deploy нашей игры на TS для публикации в Git Pages при помощи GitHub Actions.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=6duJm33Peag&list=PLMo7VyNbwQJGgWBYHPTDysdNg1UiBXXMT&index=11)
  :tv: [RuTube](https://rutube.ru/video/f67508ea08b1b67e6d209e559d34f707/?playlist=331671&playlistPage=1)
  :octocat: [commit: add deploy](https://github.com/yesworld/tutorial-dnd-animals/commit/08a92af9fac1d44a2ec8dca6c0369c6134c77ae3)

## Тот кто смог :)
- 🏆 https://github.com/davidbayra/game-puzzle-animals / 🕹 [Play](https://davidbayra.github.io/game-puzzle-animals/)
- 🏆 https://github.com/karfagen86/tutorial-dnd-animals-v2 / 🕹 [Play](https://karfagen86.github.io/tutorial-dnd-animals-v2/)

## Как ты можешь помочь проекту?
- ⭐️ Поставь звезду проектам (справа наверху страницы)
  - **tutorial-dnd-animals**
  - [tutorial-ascii-art](https://github.com/yesworld/tutorial-ascii-art)
- :tv: Подпишись на [канал](https://www.youtube.com/channel/UCRWYGOCWalOGOXnzqJd2MbQ).
- 💬 Оставь комментарий под видео.
- 👍 Воткни свой царский лайк.

### На кофе:
- ☕️ [boosty](https://boosty.to/dev_yesworld)
- ☕️ [donationalerts](https://www.donationalerts.com/r/dev_yesworld)
