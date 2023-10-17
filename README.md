# tutorial-dnd-animals
Детская интерактивная пазл игра с животными на ts (TypeScript), написанная с целью обучения, где мы попытаемся разбить [портянку старого кода](https://github.com/yesworld/tutorial-dnd-animals/commit/e74b428898f3da415e3d49b2497f80c56ee217b1#diff-4fab5baaca5c14d2de62d8d2fceef376ddddcc8e9509d86cfa5643f51b89ce3d) и создать свою **Чистую архитектуру** проекта, придерживаясь ООП стиля программирования с использованием паттернов. 

Сложность: :full_moon: :full_moon: :full_moon: :last_quarter_moon: :new_moon:
![original-animal-day.svg](public/animal-day-preview.jpg)
<div dir="rtl">Image by <a href="https://www.freepik.com/free-vector/world-animal-day-flat-design-background_31240982.htm#&position=0&from_view=search&track=ais">Freepik</a></div>

## Список уроков
- Урок 0: Подготовка проекта. Установка Vite, Prettier и Konva.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=HO6wBG8FFqo)
  
- Урок 1: SVG нарезка и содание отдельных файлов c животными. Подготовка файла источника **sources** с набором координат.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=k87xvt_7WcM) :octocat: [git-branch: tutorial-01](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial1-add-svg-animals-to-project)

- Урок 2: Создание ImageLoaderService по загрузке изображений. Добавление типов для TS.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=rzPTPMg2E30) :octocat: [git-branch: tutorial2-create-image-loader-service](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial2-create-image-loder-service)

- Урок 3: Применяем пораждающий паттерн Билдер (Builder). Приводим проект к ООП стилю.<br>
  :tv: [YouTube](https://youtu.be/kjj_4czV--c) :octocat: [git-branch: tutorial3-create-game-builder](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial3-create-game-builder)

- Урок 4: Применяем пораждающий паттерн Фабрика (Simple Factory). Делаем небольшой рефакторинг.<br>
  :tv: [YouTube](https://youtu.be/Npjy5hL6ppA) :octocat: [git-branch: tutorial4-create-konva-factory](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial4-create-konva-factory)

- Урок 5: Применяем анти паттерн Одиночка (Singleton).<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=T1l9GX3thv8) :octocat: [git-branch: tutorial5-create-pattern-singleton](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial5-create-pattern-singleton)

- Урок 6: Плюсы/минусы Синглитона в TypeScript. Создаем сервис для работе с размерами игры в ООП стиле.<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=hEdUgYRE2KM) :octocat: [git-branch: tutorial06-create-canvas-size-service](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial06-create-canvas-size-service)

- Урок 7: Применим SRP - принцип единой ответственности в TypeScript (SOLID).<br>
  :tv: [YouTube](https://www.youtube.com/watch?v=OHxE1NKnPJc) :octocat: [git-branch: tutorial07-srp-animal-manager](https://github.com/yesworld/tutorial-dnd-animals/tree/tutorial07-srp-animal-manager)
