import { v4 as uuidv4 } from 'uuid';

export const mock = {
  items: [
    {
      id: uuidv4(),
      header: 'Mauris vehicula dolor in dolor',
      text: 'Aliquam porta elit diam, at tempor ligula consequat nec. Quisque fermentum aliquam ligula sed feugiat.',
    },
    {
      id: uuidv4(),
      header: 'Phasellus sodales nunc efficitur sem',
      text: 'Donec at neque et nisi faucibus vestibulum. Proin ut sollicitudin nulla. Maecenas dolor arcu, dignissim et posuere ac, egestas non nisl. Integer sit amet euismod nulla, interdum iaculis justo. Morbi maximus ornare sem, a tempor libero condimentum in. Curabitur vehicula dui lacinia eleifend semper. Nam in ultricies quam, id faucibus erat.',
    },
    {
      id: uuidv4(),
      header: 'Integer nec luctus enim, eget pulvinar magna.',
      text: 'Nam et risus vitae dui faucibus porta sit amet sit amet sapien. Praesent gravida, nibh at fermentum auctor, nunc massa dapibus tortor, sit amet feugiat leo sapien ut erat.',
    },
    {
      id: uuidv4(),
      header: 'Aliquam fringilla varius dui, eu porta risus mollis at.',
      text: 'Proin lorem felis, finibus sed tellus eu, ultrices scelerisque urna. Donec pellentesque justo ac neque accumsan, non hendrerit magna facilisis. Integer nec volutpat nulla. Cras ultricies vehicula ante, a aliquam nulla fringilla nec. Nulla facilisi. Nulla nibh purus, faucibus vitae dapibus quis, consequat quis leo.',
    },
    {
      id: uuidv4(),
      header: 'Duis suscipit iaculis aliquam.',
      text: 'Sed nec eros non tellus porta sodales eget eu nisi. Proin elementum, erat a pulvinar tempus, mauris turpis interdum enim, vitae congue arcu sapien et justo. In eu libero nibh. Ut euismod enim a sapien hendrerit tempor. Donec ac lacus eget lacus interdum commodo. Duis pellentesque eget neque eget condimentum. Suspendisse lacinia risus aliquam tristique sollicitudin. Maecenas dignissim turpis tellus, in aliquet erat rhoncus nec. Morbi eget faucibus diam. Nulla ultrices nisi vel lectus sagittis, et pulvinar mi malesuada.',
    },
  ],
};
