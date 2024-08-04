// Understanding local storage

class LocalStorageMapper {
  set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  clear() {
    return localStorage.clear();
  }
  remove(key) {
    return localStorage.removeItem(key);
  }
}

const LocalStorage = new LocalStorageMapper();

LocalStorage.set('token', 'skdjfklsdfjlksdjfksldjfskdf');
LocalStorage.set('hobbies', ['playing', 'coding', 'reading']);
LocalStorage.set('user', {
  name: 'parvej',
  email: 'parvejkhan@gmail.com',
});
console.log(LocalStorage.get('token'));
console.log(LocalStorage.get('hobbies'));
console.log(LocalStorage.get('user'));
console.log(LocalStorage.remove('hobbies'));
console.log(LocalStorage.get('hobbies'));

const user = LocalStorage.get('user');

const userName = document.querySelector('.td-user-name');
const userEmail = document.querySelector('.td-user-email');

userName.textContent = user.name;
userEmail.textContent = user.email;

// Understanding Session storage

class SessionStorage {
  set(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }
  get(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
  remove(key) {
    return sessionStorage.removeItem(key);
  }
  clear() {
    return sessionStorage.clear();
  }
}

const Session = new SessionStorage();

const inputForm = document.querySelector('.input-form');

inputForm.addEventListener('change', (event) => {
  console.log('e', event.target.value);
  Session.set('username', event.target.value);
});

console.log(Session.get('username'), '::>from session username');

class CookieStorage {
  set(key, value) {
    let cookie = `${key}=${value};`;
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    const expires = 'expires=' + date.toGMTString();
    document.cookie = cookie + expires + ';path=/';
  }

  get(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name + '=') === 0) {
        return cookie.substring((name + '=').length, cookie.length);
      }
    }
    return '';
  }
  delete(key) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}

const Cookie = new CookieStorage();

Cookie.set('language', 'Javascript');

console.log(Cookie.get('language'), 'from cookie storage ');

// Clear all
LocalStorage.clear();
Session.clear();

console.log(Session.get('username'), '::> after clear from session username');
console.log(LocalStorage.get('username'), '::> After clear from local storage');
