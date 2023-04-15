import Response from './response';
export async function fetchProductOverviews() {
  // TODO サーバから取得するように変更
  return await new Promise<Response>((resolve) =>
    setTimeout(() => {
      return resolve({
        id: 4,
        name: 'あひるちゃん 5羽セット',
        price: '500円',
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'おもちゃ', href: '#' },
          { id: 2, name: '赤ちゃん・幼児', href: '#' },
          { id: 3, name: 'お風呂用', href: '#' },
        ],
        images: [
          {
            src: 'https://www.pakutaso.com/shared/img/thumb/PAK74_ahirucyansusumu_TP_V.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
          },
          {
            src: 'https://www.pakutaso.com/shared/img/thumb/PAK85_enjinahirucyan_TP_V.jpg',
            alt: 'Model wearing plain black basic tee.',
          },
          {
            src: 'https://www.pakutaso.com/shared/img/thumb/PAK88_amazonst_TP_V.jpg',
            alt: 'Model wearing plain gray basic tee.',
          },
          {
            src: 'https://www.pakutaso.com/shared/img/thumb/NKJ56_dateahiru_TP_V.jpg',
            alt: 'Model wearing plain white basic tee.',
          },
        ],
        colors: [
          {
            name: 'Pale white',
            class: 'bg-yellow-50',
            selectedClass: 'ring-gray-400',
          },
          {
            name: 'Yellow',
            class: 'bg-yellow-100',
            selectedClass: 'ring-gray-400',
          },
          {
            name: 'Dark yellow',
            class: 'bg-yellow-300',
            selectedClass: 'ring-gray-900',
          },
        ],
        sizes: [
          { name: 'XXS', inStock: false },
          { name: 'XS', inStock: true },
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: true },
          { name: '2XL', inStock: true },
          { name: '3XL', inStock: true },
        ],
        description:
          'あひるのフィギュアです。お風呂に浮かべて楽しいひと時をお過ごしください。',
        highlights: [
          'お風呂に浮く',
          '握ると音がする',
          'お子様の筋力強化に',
          'シリコン製',
        ],
        details:
          'シリコン製のため耐久力が高く、小傷が入りにくいため衛生面でも安心です。音を出すにはある程度の力で握る必要がありますので、楽しみながらお子様の筋力を強化することができます。各種サイズをご用意しておりますので、お子様の手の大きさに合う物をお選びいただけます。',
        reviews: { href: '#', average: 4, totalCount: 117 },
      });
    }, 500),
  );
}
