# Generated by Django 4.1.5 on 2023-03-01 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bitch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('body', models.TextField(blank=True, null=True)),
                ('link', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('body', models.TextField(blank=True, null=True)),
                ('link', models.TextField(blank=True)),
            ],
        ),
    ]