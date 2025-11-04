import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">English with Elena</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
            <a href="#materials" className="hover:text-primary transition-colors">Материалы</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Стоимость</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Записаться на урок</Button>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-secondary text-white">Профессиональный преподаватель</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Английский язык —<br />
              <span className="text-primary">легко и интересно</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Индивидуальный подход к каждому ученику. Современные методики обучения. 
              Гарантированный результат уже через 3 месяца занятий.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Calendar" size={20} />
                Записаться на пробный урок
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Play" size={20} />
                Смотреть видео
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Учеников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Результат</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/8d614bf6-7186-4ca8-83d3-1a825a85e4ec/files/e3912fbf-6d56-4437-9d12-5fe4ef08e7d1.jpg"
              alt="English Teacher"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Обо мне</Badge>
            <h2 className="text-4xl font-bold mb-4">Квалификация и опыт</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сертифицированный преподаватель с международными дипломами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Award" size={28} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Международные сертификаты</CardTitle>
                      <CardDescription className="mt-2">
                        CELTA (Cambridge), TESOL, TKT. Регулярное повышение квалификации и участие в международных конференциях.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Icon name="GraduationCap" size={28} className="text-secondary" />
                    </div>
                    <div>
                      <CardTitle>Образование</CardTitle>
                      <CardDescription className="mt-2">
                        Магистр педагогических наук, специализация "Лингвистика и межкультурная коммуникация". Опыт стажировки в Великобритании.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Target" size={28} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Методика преподавания</CardTitle>
                      <CardDescription className="mt-2">
                        Коммуникативный подход, индивидуальная программа для каждого ученика, использование современных материалов и технологий.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8d614bf6-7186-4ca8-83d3-1a825a85e4ec/files/1a26b0d0-7de3-48f5-bb6c-23136633595d.jpg"
                alt="Certificates"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Курсы</Badge>
            <h2 className="text-4xl font-bold mb-4">Программы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Разговорный английский</CardTitle>
                <CardDescription>Для уровней A1-C1</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Преодоление языкового барьера</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Живое общение на актуальные темы</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Расширение словарного запаса</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Улучшение произношения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-secondary" />
                </div>
                <CardTitle>Подготовка к экзаменам</CardTitle>
                <CardDescription>IELTS, TOEFL, FCE, CAE</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Изучение формата экзамена</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Отработка всех навыков</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Пробные тесты и симуляции</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Стратегии успешной сдачи</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <CardTitle>Деловой английский</CardTitle>
                <CardDescription>Для профессионалов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Презентации и переговоры</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Деловая переписка</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Профессиональная лексика</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Бизнес-этикет и культура</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Материалы</Badge>
            <h2 className="text-4xl font-bold mb-4">Полезные статьи и ресурсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Бесплатные материалы для самостоятельного изучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Icon name="FileText" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Грамматические правила</CardTitle>
                <CardDescription>15 статей</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Icon name="Headphones" size={32} className="text-secondary mb-2" />
                <CardTitle className="text-lg">Аудио уроки</CardTitle>
                <CardDescription>24 записи</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Icon name="Video" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Видео лекции</CardTitle>
                <CardDescription>32 видео</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <Icon name="Download" size={32} className="text-secondary mb-2" />
                <CardTitle className="text-lg">PDF материалы</CardTitle>
                <CardDescription>40+ файлов</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img 
                    src="https://cdn.poehali.dev/projects/8d614bf6-7186-4ca8-83d3-1a825a85e4ec/files/50404af4-872e-4301-92f6-4db89ebdd816.jpg"
                    alt="Study materials"
                    className="w-full md:w-1/3 rounded-xl object-cover"
                  />
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold">Получите бесплатный гайд</h3>
                    <p className="text-muted-foreground">
                      "10 шагов к свободному английскому" — практическое руководство с упражнениями и советами от профессионального преподавателя.
                    </p>
                    <Button className="gap-2">
                      <Icon name="Download" size={20} />
                      Скачать бесплатно
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Стоимость</Badge>
            <h2 className="text-4xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобный формат обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Пробный урок</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Бесплатно</span>
                </div>
                <CardDescription className="mt-2">30 минут знакомства</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Определение уровня</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Обсуждение целей</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Подбор программы</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Индивидуальные</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">1500₽</span>
                  <span className="text-muted-foreground">/урок</span>
                </div>
                <CardDescription className="mt-2">60 минут занятия</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Личный подход</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Гибкий график</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Домашние задания</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>Все материалы</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Пакет занятий</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">12000₽</span>
                  <span className="text-muted-foreground">/10 уроков</span>
                </div>
                <CardDescription className="mt-2">Экономия 3000₽</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Все из тарифа выше</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Скидка 20%</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Доп. материалы</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Записаться на урок</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и я свяжусь с вами в течение 24 часов
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших целях и предпочтениях..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Icon name="Mail" size={24} className="mx-auto text-primary" />
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">elena@english.com</div>
                  </div>
                  <div className="space-y-2">
                    <Icon name="Phone" size={24} className="mx-auto text-primary" />
                    <div className="font-medium">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                  <div className="space-y-2">
                    <Icon name="MessageCircle" size={24} className="mx-auto text-primary" />
                    <div className="font-medium">Telegram</div>
                    <div className="text-sm text-muted-foreground">@elena_english</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">English with Elena</h3>
          <p className="text-white/70 mb-6">Профессиональное обучение английскому языку</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Telegram</a>
            <a href="#" className="hover:text-primary transition-colors">VK</a>
            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
          </div>
          <div className="text-sm text-white/50">
            © 2024 English with Elena. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
