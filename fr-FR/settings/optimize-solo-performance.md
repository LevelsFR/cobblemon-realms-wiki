# ⚙️ Optimiser les performances en solo

{% hint style="info" %}
<p align="center">Si vous rencontrez des freezes, rollbacks, ralentissements mémoire ou des problèmes de performances en solo sur Cobblemon Realms, ajuster les arguments JVM peut améliorer significativement la stabilité du jeu.</p>
{% endhint %}

***

## 📋 Configuration recommandée

| Élément              | Recommandation       |
| -------------------- | -------------------- |
| ☕ Java               | Java 21 ou supérieur |
| 💾 RAM               | 8 Go minimum         |
| 💾 RAM conseillée    | 10 Go                |
| ⚙️ Garbage Collector | G1GC                 |

***

## ⚙️ Arguments JVM recommandés

Copiez les arguments JVM suivants dans les paramètres Java supplémentaires. Réglez séparément la mémoire allouée à Minecraft avec le curseur CurseForge :

```
-XX:+UseG1GC
-XX:MaxGCPauseMillis=100
-XX:InitiatingHeapOccupancyPercent=30
-XX:+ExplicitGCInvokesConcurrent
```

***

## 🛠️ Configuration dans CurseForge

### ☝🏼 Étapes

1. Ouvrez `CurseForge`.
2. Cliquez sur `⚙️ Paramètres`.
3. Rendez-vous dans `Game Specific → Minecraft`.
4. Descendez jusqu'à `Java Settings`.
5. Désactivez `Use System Memory Settings`.
6. Commencez avec `8 Go (8192 Mo)` de RAM. Vous pouvez monter jusqu'à `10 Go (10240 Mo)` si nécessaire et si votre PC dispose de suffisamment de mémoire disponible.
7. Collez les arguments JVM ci-dessus dans `Additional Java Arguments`. Supprimez toute entrée `-Xms` ou `-Xmx` existante afin d'éviter un conflit avec le curseur de mémoire.
8. Sauvegardez puis redémarrez le modpack.

{% hint style="warning" %}
<p align="center">CurseForge gère la mémoire Java de Minecraft à l'aide de son curseur RAM. Ne définissez pas manuellement <code>-Xms</code> ou <code>-Xmx</code> dans les arguments Java supplémentaires : ces valeurs peuvent remplacer le réglage du curseur ou entrer en conflit avec lui. Vérifiez aussi les éventuels réglages propres au profil.</p>
{% endhint %}

***

## 📈 Ce que ces réglages améliorent

* ✅ Réduction des freezes et micro-lags
* ✅ Meilleure gestion de la mémoire (GC)
* ✅ Moins de rollbacks en solo
* ✅ Sessions de jeu plus stables
* ✅ Meilleures performances globales

***

{% hint style="info" %}
### 💡 Conseils complémentaires

* ❌ Évitez les applications gourmandes en arrière-plan
* 🎮 Limitez les shaders très exigeants
* 📦 Maintenez vos pilotes graphiques à jour
* 🖥️ La RAM allouée à Java et la mémoire de la carte graphique (VRAM) sont distinctes. Augmenter la RAM Java ne corrige pas une erreur d'allocation de mémoire GPU.
* 🗺️ Utilisez Chunky pour pré-générer les chunks de vos mondes
{% endhint %}

***

{% hint style="success" %}
<p align="center">Avec Java 21 et ces réglages JVM, Cobblemon Realms devrait être plus fluide et plus stable, notamment sur les mondes avancés et lors des longues sessions de jeu.</p>
{% endhint %}

***

{% hint style="success" %}
### Nous contacter

<p align="center">Si vous avez des questions, des suggestions ou des modifications à proposer, n'hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.</p>
{% endhint %}
