import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getStorage } from '@/utils/storage';

interface ITranslation {
    [key: string]: string;
}

const cache: Resource = {};

const modules: Record<
    string,
    {
        [key: string]: ITranslation;
    }
> = import.meta.globEager('./**/*.ts');

for (let path in modules) {
    let lastPoint = path.lastIndexOf('.');
    let lastLevel = path.lastIndexOf('/');
    let firstLevel = path.indexOf('/');
    let index = path.substring(lastLevel + 1, lastPoint);
    let name = path.substring(firstLevel + 1, lastLevel);
    cache[index] = {
        translation: {
            [name]: modules[path].default,
            ...(cache[index] as { translation: ITranslation })?.translation
        }
    };
}

i18n.use(initReactI18next).init({
    lng: getStorage('react-vite-cli') ?? 'zh',
    resources: cache
});

export default i18n;
