import Response from './response';
export async function fetchProductOverviews() {
  // 本来ならばAPIサーバへ通信し情報を取得する。今回のサンプル作成では簡略化し固定値をレスポンスする。
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
            id: 1,
            name: 'Pale yellow',
            class: 'bg-yellow-50',
            selectedClass: 'ring-gray-400',
          },
          {
            id: 2,
            name: 'Yellow',
            class: 'bg-yellow-100',
            selectedClass: 'ring-gray-400',
          },
          {
            id: 3,
            name: 'Dark yellow',
            class: 'bg-yellow-300',
            selectedClass: 'ring-gray-900',
          },
        ],
        sizes: [
          { id: 1, name: 'XXS', inStock: false },
          { id: 2, name: 'XS', inStock: true },
          { id: 3, name: 'S', inStock: true },
          { id: 4, name: 'M', inStock: true },
          { id: 5, name: 'L', inStock: true },
          { id: 6, name: 'XL', inStock: true },
          { id: 7, name: '2XL', inStock: true },
          { id: 8, name: '3XL', inStock: true },
        ],
        description: 'あひるのフィギュアです。お風呂に浮かべて楽しいひと時。',
        highlights: [
          'お風呂に浮く',
          '握ると音が鳴る',
          'シリコン製で丈夫',
          'お子様の筋力強化にも',
        ],
        details:
          'かわいいあひるちゃんの5羽セット。シリコン製のため小傷が入りにくく、衛生面も安心です。音を出すにはある程度の力で握る必要がありますので、楽しみながらお子様の筋力を強化することができます。各種サイズをご用意しておりますので、お子様の手の大きさに合う物をお選びいただけます。',
        reviews: { href: '#', average: 4, totalCount: 117 },
      });
    }, 500),
  );
}
