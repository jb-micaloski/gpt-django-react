from rest_framework import serializers
from .models import PainEscale

class PainEscaleSerializer(serializers.ModelSerializer):
    class Meta:
            model = PainEscale
            fields = ('id', 'session', 'code', 'whoareyou', 'product', 'descript', 'trouble', 'target', 'channel', 'feedback', 'created_at')
            

class CreateCCSerializer(serializers.ModelSerializer):
      class Meta:
            model = PainEscale
            fields = ('whoareyou', 'product', 'descript', 'trouble', 'target', 'channel', 'feedback')
